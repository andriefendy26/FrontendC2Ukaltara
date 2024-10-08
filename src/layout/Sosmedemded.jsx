import React from "react";
import { getFeed, getProfile } from "../services/InstagramApi";
import { InstagramEmbed } from "react-social-media-embed";

const Sosmedemded = () => {
  const [data, setData] = React.useState([]);
  const [profile, setProfile] = React.useState([]);

  const getDataFeed = async () => {
    const data = await getFeed();
    setData(data.data);
    console.log(data.data);
  };
  const getDataProfile = async () => {
    const data = await getProfile();
    setProfile(data);
    console.log(data);
  };

  React.useEffect(() => {
    getDataFeed();
    getDataProfile();
  }, []);

  return (
    <div className="mt-10 flex flex-col items-center mx-10 lg:mx-24 xl:mx-60 overflow-hidden">
      <h1 className="text-4xl tracking-wider font-bold mb-2">Sosial Media</h1>
      <div>
        <div class=" grid grid-cols-5 mb-5">
          <div class="object-center">
            <img
              src={profile.profile_picture_url}
              class="rounded-full w-32 h-32 p-5 object-cover"
            />
          </div>

          <div class="col-span-4 flex flex-col gap-4">
            <div class="text-gray-800 flex flex-row gap-5 items-center">
              <div class="text-2xl">{profile.username}</div>
            </div>

            <div class="text-gray-800 flex flex-row gap-10 items-center">
              <div>
                <span class="font-semibold"> {profile.media_count} </span> Posts
              </div>

              <div>
                <span class="font-semibold"> {profile.followers_count} </span>{" "}
                Followers
              </div>

              <div>
                <span class="font-semibold"> {profile.follows_count} </span>{" "}
                Following
              </div>
            </div>

            <div class="text-gray-800 flex flex-col">
              {/* <div class="font-bold">배수지/Baesuzy?</div> */}
              <div>{profile.biography}</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2">
          {data &&
            data.slice(0, 3).map((data, i) => (
            //   <img key={i} src={data.media_url}></img>
              <InstagramEmbed url={data.permalink} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sosmedemded;
