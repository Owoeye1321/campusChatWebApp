// make this a middleware function, 
// then put it on the route like you used jwt,
// then get the value with req.users.

const { IncomingForm } = require('formidable')
const { resolve } = require('path')
const { existsSync, writeFileSync } = require('fs')

module.exports = (req, res, next) => {
  const form = new IncomingForm({
    maxFileSize: 1 * 1024 * 1024,
    keepExtensions: true
  })

  form.parse(req, (error, fields, file) => {
    if (error) return next(error)
    const patternFile = /\.(jpg|jpeg|png|svg|gif|raw|webp)$/gi.test(file.productImage.name)

    if (patternFile) {
      const pathFile = resolve(process.cwd(), 'servers/uploads/', file.productImage.name)
      const fileExits = existsSync(pathFile)
      if (!fileExits) {
        writeFileSync(pathFile)
        req.users = JSON.parse(JSON.stringify({ fields, file }))
        return next()
      }
      req.users = JSON.parse(JSON.stringify({ fields, file }))
      return next()
    }
  })
}