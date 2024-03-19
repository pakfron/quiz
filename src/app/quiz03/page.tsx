import React from "react";

type Props = {};

export default function Quiz03({}: Props) {
  const array1 = [
    { Code: 101, Name: "AAA" },
    { Code: 102, Name: "BBB" },
    { Code: 103, Name: "CCC" },
  ];

  const array2 = [
    { Code: 103, City: "Singapore" },
    { Code: 102, City: "Tokyo" },
    { Code: 101, City: "Bangkok" },
  ];

  const array3 = array1.map((el1) => {
    const combine = array2.find((el2) => el1.Code == el2.Code);
    return { ...el1, ...combine };
  });

  return (
    <div>
      <div>
        <div>array1</div>
        <table>
          <tbody>
            <tr>
              <th className="border border-black">Code</th>
              <th className="border border-black">Name</th>
            </tr>
            {array1.map((el, index) => (
              <tr key={index}>
                <td className="border border-black">{el.Code}</td>
                <td className="border border-black">{el.Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div className="mt-5">array2</div>
        <table>
          <tbody>
            <tr>
              <th className="border border-black">Code</th>
              <th className="border border-black">City</th>
            </tr>
            {array2.map((el, index) => (
              <tr key={index}>
                <td className="border border-black">{el.Code}</td>
                <td className="border border-black">{el.City}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <div>Output</div>
        <table>
          <tbody>
            <tr>
              <th className="border border-black">Code</th>
              <th className="border border-black">Name</th>
              <th className="border border-black">City</th>
            </tr>

            {array3.map((el, index) => (
              <tr key={index}>
                <td className="border border-black">{el.Code}</td>
                <td className="border border-black">{el.Name}</td>
                <td className="border border-black">{el.City}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
