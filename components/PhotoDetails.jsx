import { getDictionary } from "@/app/[lang]/dictionaries"
import Image from "next/image"

const PhotoDetails = async ({ id, lang }) => {
  const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`)
  const photo = await response.json() // Await the response

  const dictionary = getDictionary(lang)

  return (
    <>
      <div className="container my-4 lg:my-8">
        <div className="grid grid-cols-12 gap-4 2xl:gap-10">
          {/* main photo */}
          <div className="col-span-12 lg:col-span-8 border rounded-xl">
            <Image
              className="max-w-full h-full max-h-[70vh] mx-auto"
              src={photo.url}
              alt={photo.title}
              width={900} // Add the desired width
              height={500} // Add the desired height
            />
          </div>
          {/* main photo ends */}

          {/* details card */}
          <div className="p-6 border rounded-xl col-span-12 lg:col-span-4">
            <h2 className="text-lg lg:text-2xl font-bold mb-2">
              The Beautiful Nature
            </h2>
            <div className="text-xs lg:text-sm text-black/60 mb-6">
              #nature, #river, #ocean
            </div>
            {/* info rows */}
            <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
              {/* item start */}
              <div className="flex justify-between">
                <span>Views</span>
                <span className="font-bold">10M</span>
              </div>
              {/* item ends */}
              {/* item start */}
              <div className="flex justify-between">
                <span>Share</span>
                <span className="font-bold">10M</span>
              </div>
              {/* item ends */}
              {/* item start */}
              <div className="flex justify-between">
                <span>Uploaded</span>
                <span className="font-bold">31 January 2024</span>
              </div>
              {/* item ends */}
            </div>
            {/* info rows ends */}

            {/* author info */}
            <div className="mt-6">
              {/* author header */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <Image
                    className="size-12 lg:size-14 rounded-full border"
                    src="https://i.pravatar.cc/150?img=53"
                    alt="avatar"
                    width={50} // Add width for avatar
                    height={50} // Add height for avatar
                  />
                  <div className="space-y-3">
                    <h6 className="lg:text-lg font-bold">Saad Hasan</h6>
                    <p className="text-black/60 text-xs lg:text-sm">420 Followers</p>
                  </div>
                </div>
                {/* action */}
                <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
                  <Image
                    src="./assets/icons/follow.svg"
                    className="w-5 h-5"
                    alt=""
                    width={20} // Add width for follow icon
                    height={20} // Add height for follow icon
                  />
                  Follow
                </button>
              </div>
              {/* author bio */}
              <p className="text-xs lg:text-sm text-black/60">
                I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!
              </p>
            </div>
            {/* author info ends */}
            {/* actions */}
            <div className="mt-6">
              <div className="flex items-stretch gap-3">
                <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                  <Image
                    src="./assets/icons/heart.svg"
                    className="w-5 h-5"
                    alt=""
                    width={20} // Add width for heart icon
                    height={20} // Add height for heart icon
                  />
                  100
                </button>
                <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                  <Image
                    src="./assets/icons/save.svg"
                    className="w-5 h-5"
                    alt=""
                    width={20} // Add width for save icon
                    height={20} // Add height for save icon
                  />
                  Save
                </button>
                <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                  <Image
                    src="./assets/icons/share.svg"
                    className="w-5 h-5"
                    alt=""
                    width={20} // Add width for share icon
                    height={20} // Add height for share icon
                  />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhotoDetails
