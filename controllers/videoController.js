import { videos } from '../db'
import routes from '../routes'
export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos })
}
export const search = (req, res) => {
    const { query: { term: searchingBy } } = req
    console.log(searchingBy)
    res.render("search", { pageTitle: "Home", searchingBy, videos })
}

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Upload" })
}
export const postUpload = (req, res) => {
    const {
        body: {
            file,
            title,
            description
        }
    } = req
    console.log(file)
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(123))
}

export const videoDetail = (req, res) => {
    res.render("videoDetail", { pageTitle: "Video Detail", videos })
}