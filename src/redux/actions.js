import {
  CREATE_POST,
  HIDE_ALERT,
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./types"

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  }
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS, // SAGA
  }

  // return async dispatch => {
  //   try {
  //     console.log(`dispatch:`, dispatch)
  //     dispatch(showLoader())
  //     const response = await fetch(url)
  //     const json = await response.json()
  //     dispatch({ type: FETCH_POSTS, payload: json })
  //     dispatch(hideLoader())
  //   } catch (error) {
  //     dispatch(showAlert("щось пішло не так"))
  //     dispatch(hideLoader())
  //   }
  // }
}
