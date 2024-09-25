import PhotoDetails from "@/components/PhotoDetails"

const photoDetailsPage = ({ params: { id, lang } }) => {
  return <PhotoDetails id={id} lang={lang} />
}

export default photoDetailsPage
