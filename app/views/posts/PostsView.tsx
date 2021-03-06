import React from 'react'

import { PostsProps, PostsState } from '../../types/navigation';
import redditAPI from '../../api/reddit'
import { Post } from '../../types/primitives';
import PostCell from './PostCell';
import { View, ActivityIndicator, RefreshControl, Alert } from 'react-native';
import { defaults } from '../styles';
import { FlatList } from 'react-native-gesture-handler';
import { Separator } from '../Separator';
import database from '../../api/database';

export default class PostsView extends React.Component<PostsProps, PostsState> {

    state: Readonly<PostsState> = {
        loading: false,
        beginning: true,
        refreshing: false,
        currentSub: this.props.route.params.currentSub || '',
        userID: this.props.route.params.userID || 0,
        currentPosts: [],
        offline: false
    }

    componentDidMount() {
        // Shows the loading screen
        this.setState({ loading: true })
        this.props.navigation.setOptions({ title: this.state.currentSub })

        // Fetch list of posts from Reddit
        redditAPI.fetchPosts(this.state.currentSub, undefined)
            // Load posts when they are fetched
            .then(posts => this.setState({
                beginning: false,
                loading: false, // Stop showing loading screen
                currentPosts: posts
            }))

    }

    // Saves the selected post to the database
    savePost = (post: Post) => {
        // If user is not a guest
        if (this.state.userID > 0) {
            // If post has been saved
            if (post.saved) {
                Alert.alert(
                    "Post saved",
                    "Post is already saved to view offline",
                    [
                        {
                            text: "OK",
                            onPress: () => console.log("Try to unsave post")
                        }
                    ]
                )
            }
            else {
                // Saves post to database
                database.addPost(post, this.state.userID)
                    .then(res => {
                        const saved = { ...post, saved: true }
                        const newState = this.state.currentPosts.map(post => {
                            if (post.name !== saved.name) return post
                            return saved
                        })
                        this.setState({ currentPosts: [...newState] })
                    })
                    .catch(err => {
                        console.log(err)
                        Alert.alert(
                            "Error saving post",
                            err.message,
                            [
                                {
                                    text: "OK",
                                    onPress: () => console.log("Error saving post", err)
                                }
                            ]
                        )
                    })
            }
        }
        else {
            Alert.alert(
                "Unvailable functionality",
                "Guest users cannot save posts. Try logging in or registering.",
                [
                    {
                        text: "OK",
                        onPress: () => console.log("Guest trying to save post")
                    }
                ]
            )
        }
    }

    // Get the last post in the list
    getLastPost(): Post {
        return this.state.currentPosts[this.state.currentPosts.length - 1]
    }

    // Loads more posts to this screen when arriving at the end of the current list
    loadMorePosts() {
        redditAPI.fetchPosts(this.state.currentSub, this.getLastPost().name)
            .then(posts => this.setState({
                currentPosts: this.state.currentPosts.concat(posts)
            }))
    }

    // Renders a loading prompt when arriving at the last post
    renderFooter = () => {
        if (!this.state.loading) return null
        return (
            <ActivityIndicator />
        )
    }

    // Function call when the user wants to update screen
    refreshView() {
        this.setState({ refreshing: true })
        redditAPI.fetchPosts(this.state.currentSub, undefined)
            .then(posts => {
                this.setState({
                    refreshing: false,
                    currentPosts: posts
                })
            })
    }

    // Renders a post in state
    renderPost = (item: Post) => <PostCell
        post={item}
        navigation={this.props.navigation}
        save={this.savePost}
    />

    render() {
        if (this.state.beginning && this.state.loading) {
            return (
                <View style={defaults.all}>
                    <ActivityIndicator size="large" color="lightsteelblue" />
                </View>)
        }
        return (
            <View style={[defaults.all, defaults.color]}>
                <FlatList
                    key={'posts'}
                    renderItem={(obj) => this.renderPost(obj.item)}
                    data={this.state.currentPosts}
                    keyExtractor={(item: Post) => item.name}
                    onEndReached={() => this.loadMorePosts()}
                    onEndReachedThreshold={0.5}
                    ItemSeparatorComponent={Separator}
                    ListFooterComponent={() => this.renderFooter()}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => this.refreshView()}
                        />
                    }
                />
            </View>
        )
    }
}