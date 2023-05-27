import multer from 'multer'

const imagesStorage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'src/uploads/images/')
    },
    filename(req, file, cb) {
        cb(
            null,
            new Date().toISOString().replace(/:/g, '-') +
                '-' +
                file.originalname
        )
    },
})

const documentStorage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'src/uploads/documents/')
    },
    filename(req, file, cb) {
        cb(
            null,
            new Date().toISOString().replace(/:/g, '-') +
                '-' +
                file.originalname
        )
    },
})

const types = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/gif',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/pdf',
]

const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

export default multer({ storage: imagesStorage, fileFilter })
