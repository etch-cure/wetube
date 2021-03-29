import express from 'express'
import routes from '../routes'
import { search, deleteVideo, postEditVideo, getEditVideo, videoDetail, getUpload, postUpload } from '../controllers/videoController'
import { onlyPrivate, uploadVideo } from '../middlewares'

const videoRouter = express.Router()
videoRouter.get(routes.upload, onlyPrivate, getUpload)
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload)
videoRouter.get(routes.videoDetail(), videoDetail)
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo)
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo)

videoRouter.get(routes.search, search)

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo)
export default videoRouter