// LatestReleases.jsx

import React from "react";
import "./latestreleases.css";

const LatestReleases = () => {
  const releases = [
    {
      id: 1,
      src: "https://img.wynk.in/unsafe/100x100/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431980878_20240119151825/8903431980878/1705658705508/resources/8903431980878.jpg",
      songName: "Akhiyaan Gulaab",
      artistName: "Mitraz",
      trendingPosition: "2:51",
    },
    {
      id: 2,
      src: "https://img.wynk.in/unsafe/100x100/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431975058_20231211173133/8903431975058/1702297209998/resources/8903431975058.jpg",
      songName: "O Maahi (From Dunki)",
      artistName: "Arrijit Singh",
      trendingPosition: "3:53",
    },
    {
      id: 3,
      src: "https://img.wynk.in/unsafe/100x100/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_saregama/20240129171752000/8907212014830/1706530530005/resources/8907212014830.jpg",
      songName: "Dua (From Article 370)",
      artistName: "Jubin Nautiyal",
      trendingPosition: "4:38",
    },
    {
      id: 4,
      src: "https://img.wynk.in/unsafe/100x100/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431969415_20231027141317/8903431969415/1698397206663/resources/8903431969415.jpg",
      songName: "Satranga (From ANIMAL)",
      artistName: "Raghav",
      trendingPosition: "2:33",
    },
    {
      id: 5,
      src: "https://img.wynk.in/unsafe/100x100/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8902894362092_20231124231032/8902894362092/1700848809508/resources/8902894362092.jpg",
      songName: "Pehle Bhi Main",
      artistName: "Vishal Mishra",
      trendingPosition: "4:10",
    },
    {
      id: 6,
      src: "https://img.wynk.in/unsafe/100x100/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602458927436_20231129001716763/1701223519529/23UM1IM56437_T1_cvrart.jpg",
      songName: "Husn",
      artistName: "Anuv Jain",
      trendingPosition: "3:17",
    },
    {
      id: 7,
      src: "https://img.wynk.in/unsafe/100x100/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_wyndie/wa_4yaJBAgGgg/1707772648676/1707772648676.jpg",
      songName: "Ishq-E-Jaan",
      artistName: "Rahat Fateh Ali Khan",
      trendingPosition: "3:00",
    },
    {
      id: 8,
      src: "https://img.wynk.in/unsafe/100x100/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431981844_20240201001421/8903431981844/1706727618579/resources/8903431981844.jpg",
      songName:
        "Teri Baaton Mein Aisa Uljha Jiya",
      artistName: "Raghav",
      trendingPosition: "3:10",
    },
    {
      id: 9,
      src: "https://img.wynk.in/unsafe/100x100/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/music/1686733018979/Bhediya.jpg",
      songName: "Apna Bana Le",
      artistName: "Arijit Singh",
      trendingPosition: "2:50",
    },
    {
      id: 10,
      src: "https://img.wynk.in/unsafe/100x100/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602465274158_20240220000616118/1708392016875/24UMGIM16564_T1_cvrart.jpg",
      songName: "Daaku",
      artistName: "Badshah",
      trendingPosition: "3:15",
    },
  ];

  return (
    <div className="my-12">
      <div className="mt-8 max-h-80 bg-black font-bold text-white opacity-75 border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-2xl scrollbarcustom shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
        <table className="tableauto rounded-2xl overflow-hidden">
          <thead className="tablehead">
            <tr>
              <th className=" bg-black font-bold">#</th>
              <th className=" bg-black font-bold">Track</th>
              <th className=" bg-black font-bold">Artist</th>
              <th className=" bg-black font-bold">Duration</th>
              <th className=" bg-black font-bold"></th>
            </tr>
          </thead>
          <tbody>
            {releases.map((release) => (
              <tr key={release.id} className="hover:bg-purple-800">
                <td className="image">
                  <img
                    src={release.src}
                    alt="Album cover"
                    className="w-12 h-12 bg-slate-300 rounded-lg"
                  />
                </td>
                <td className="px-0 py-2 songname">{release.songName}</td>
                <td className="px-4 py-2 artistname">{release.artistName}</td>
                <td className="px-4 py-2 trending">
                  {release.trendingPosition}
                </td>
                <td className="px-4 py-2 butn">
                  <button className="btan bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Play
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestReleases;
