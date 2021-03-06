import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

// Styling for each component in the application

export const defaults = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'royalblue',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  all: {
    flex: 1
  },
  center: {
    alignSelf: "center"
  },
  color: {
    backgroundColor: '#EDFBF8',
  }
});

export const sub_styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 25
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    paddingVertical: 15,
    marginVertical: 10,
    marginHorizontal: 75,
    borderRadius: 7
  },
  text: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
  },
  progress_one: {
    flex: 1,
    justifyContent: 'center'
  },
  progress: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  search_text: {
    padding: 2,
    borderBottomWidth: 1.5,
    borderColor: 'royalblue'
  },
  search_container: {
    flex: 1,
    padding: 35,
    justifyContent: 'center',
    backgroundColor: '#EDFBF8'
  },
  options_container: {
    padding: 10,
    margin: 30,
  },
  button_container: {
    justifyContent: 'space-between',
  }
});

export const posts = StyleSheet.create({
  with_image: {
    paddingBottom: 30
  },
  cell: {
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: 'black',
    shadowOffset: { width: 9, height: 6 },
    shadowOpacity: 0.10,
    shadowRadius: 11.0,
    elevation: 1,
  },
  content: {
    justifyContent: "center",
    alignItems: "stretch",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 3,
    paddingHorizontal: 10
  },
  info_text: {
    fontSize: 12,
    padding: 5,
    textAlign: "left"
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left",
    marginTop: 5,
    marginBottom: 3,
    marginHorizontal: 10
  },
  indicator: {
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignContent: "center"
  },
  save_button: {
    marginVertical: 5,
    alignContent: "center",
    justifyContent: "center"
  }
})

export const post_detail = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#EDFBF8'
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "left",
    marginBottom: 10,
    marginHorizontal: 10
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    width: '100%',
    alignItems: "stretch",
  },
  info: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 3,
    paddingHorizontal: 10
  },
  info_text: {
    fontSize: 16,
    padding: 2,
    textAlign: "left"
  },
  scroll: {
    flex: 4
  },
  scroll_content: {
    marginBottom: 20
  },
  button_container: {
    marginTop: 20
  }
})