import React from "react";

const ListContainer = () => {
  return (
    <>
      <table className="bg-slate-600 m-10 rounded-3xl w-full shadow-[inset_-12px_-8px_40px_#46464620]">
        <thead className="border-b-0">
          <tr>
            <th className="p-5">Music-Img</th>
            <th>Music Name</th>
            <th>Artist name</th>
            <th>Trending number</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="shadow-md ">
            <td className="w-[100px] p-10">INV001</td>
            <td>Paid</td>
            <td>$250.00</td>
            <td>$250.00</td>
          </tr>
          <tr className="shadow-md">
            <td className="w-[100px] p-10">INV002</td>
            <td>Pending</td>
            <td>$150.00</td>
            <td>$150.00</td>
          </tr>
          <tr className="shadow-md">
            <td className="w-[100px] p-10">INV003</td>
            <td>Unpaid</td>
            <td>$350.00</td>
            <td>$350.00</td>
          </tr>
          <tr className="shadow-md">
            <td className="w-[100px] p-10">INV004</td>
            <td>Paid</td>
            <td>$450.00</td>
            <td>$450.00</td>
          </tr>
          <tr className="shadow-md">
            <td className="w-[100px] p-10">INV005</td>
            <td>Paid</td>
            <td>$550.00</td>
            <td>$550.00</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ListContainer;
