export const checkImage = (file) => {
    let err = ""
    if (!file) return err = "File does not exist."

    if (file.size > 1024 * 1024) // 1mb
        err = "The largest image size is 1mb."

    if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        err = "Image format is incorrect."

    return err;
}


export const imageUpload = async (images) => {
    let imgArr = [];
    for (const item of images) {
        const formData = new FormData()

        if (item.camera) {
            formData.append("file", item.camera)
        } else {
            formData.append("file", item)
        }

        formData.append("upload_preset", "a7eb1ucw")
        formData.append("cloud_name", "adms")

        const res = await fetch("enter your cloud space link here", {
            method: "POST",
            body: formData
        })


        const data = await res.json()
        imgArr.push({ public_id: data.public_id, url: data.secure_url })


    }
    return imgArr;
}
