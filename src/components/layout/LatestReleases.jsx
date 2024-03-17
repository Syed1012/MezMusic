// LatestReleases.jsx

import React from "react";
import "./latestreleases.css";

const LatestReleases = () => {
  // Dummy data for testing
  const releases = [
    { id: 1, songName: "Song 1", artistName: "Artist 1", trendingPosition: 1 },
    { id: 2, songName: "Song 2", artistName: "Artist 2", trendingPosition: 2 },
    { id: 3, songName: "Song 3", artistName: "Artist 2", trendingPosition: 2 },
    { id: 4, songName: "Song 4", artistName: "Artist 2", trendingPosition: 2 },
    { id: 5, songName: "Song 5", artistName: "Artist 2", trendingPosition: 2 },
    { id: 6, songName: "Song 6", artistName: "Artist 2", trendingPosition: 2 },
    { id: 7, songName: "Song 7", artistName: "Artist 2", trendingPosition: 2 },
    { id: 8, songName: "Song 8", artistName: "Artist 2", trendingPosition: 2 },
    { id: 9, songName: "Song 9", artistName: "Artist 2", trendingPosition: 2 },
    { id: 10, songName: "Song 10", artistName: "Artist 2", trendingPosition: 2 },
    { id: 11, songName: "Song 11", artistName: "Artist 2", trendingPosition: 2 },
    { id: 12, songName: "Song 12", artistName: "Artist 2", trendingPosition: 2 },
    { id: 13, songName: "Song 13", artistName: "Artist 2", trendingPosition: 2 },
    { id: 14, songName: "Song 14", artistName: "Artist 2", trendingPosition: 2 },
    { id: 15, songName: "Song 15", artistName: "Artist 2", trendingPosition: 2 },
    { id: 16, songName: "Song 16", artistName: "Artist 2", trendingPosition: 2 },
    { id: 17, songName: "Song 17", artistName: "Artist 2", trendingPosition: 2 },
    { id: 18, songName: "Song 18", artistName: "Artist 2", trendingPosition: 2 },
    { id: 19, songName: "Song 19", artistName: "Artist 2", trendingPosition: 2 },
    { id: 20, songName: "Song 20", artistName: "Artist 2", trendingPosition: 2 },
    // Add more dummy data as needed
  ];

  return (
    <div className="my-12">
      <h1 className="font-bold text-4xl font-serif">Latest Releases</h1>
      <div className="mt-8 max-h-80 bg-black text-white opacity-75 border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-2xl scrollbarcustom shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
        <table className="tableauto rounded-2xl overflow-hidden">
          <tbody>
            {releases.map((release) => (
              <tr key={release.id} className="hover:bg-purple-800">
                <td>
                  <img
                    src="url_to_image"
                    alt="Album cover"
                    className="w-12 h-12"
                  />
                </td>
                <td className="px-4 py-2">{release.songName}</td>
                <td className="px-4 py-2">{release.artistName}</td>
                <td className="px-4 py-2">{release.trendingPosition}</td>
                <td className="px-4 py-2">
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
