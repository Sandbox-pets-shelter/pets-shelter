export const handleShareButton = () => {
    if (navigator.share) {
      navigator
        .share({
          url: 'https://localhost:3000/pets/'
        })
        .then(() => {
          console.log('Sharing successfull')
        })
        .catch(() => {
          console.log('Sharing failed')
        })
    } else {
      console.log('Sorry! Your browser does not support Web Share API')
    }
}