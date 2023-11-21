// import data from "./data";
// import { useState } from "react";

const data = [
  {
    seller_id: "34373422967168215462678f33d23b0e",
    seller_type: "PUBLISHER",
    name: "fnxmodapk",
    domain: "fnxmodapk.site",
  },
  {
    seller_id: "bcb48c4deb0d29f3af7dd703883c66b4",
    seller_type: "PUBLISHER",
    name: "aitoolstonlinefree",
    domain: "aitoolstonlinefree.com",
  },
  {
    seller_id: "62734c9a042ad16aef850193b7df7c92",
    seller_type: "PUBLISHER",
    name: "unbotheredchef",
    domain: "unbotheredchef.com",
  },
  {
    seller_id: "8f2545bcadc653de837f86f81b2f404e",
    seller_type: "PUBLISHER",
    name: "aiacademyonline",
    domain: "aiacademyonline.blogspot.com",
  },
  {
    seller_id: "673352c20deaaa9382de982f4a5af5be",
    seller_type: "PUBLISHER",
    name: "libregenie",
    domain: "libregenie.fr",
  },
  {
    seller_id: "55164bdfebaa67ee1fa46ba900bbb9f5",
    seller_type: "PUBLISHER",
    name: "aiacademyonline",
    domain: "aiacademyonline.tech",
  },
  {
    seller_id: "83201b57a012936e511d94e7ffc0e0c7",
    seller_type: "PUBLISHER",
    name: "55secrets",
    domain: "55secrets.com",
  },
  {
    seller_id: "8c981b8eb6be093bb6b43684395e2c03",
    seller_type: "PUBLISHER",
    name: "rapidjogos",
    domain: "rapidjogos.blogspot.com",
  },
];

function App() {
  //   fetch("https://www.mediavine.com/sellers.json")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  return (
    <>
      <ol className="list" type="1">
        {data.map((item) => (
          <li key={item.seller_id}>
            <div>
              <p>
                <a
                  href={`https://www.${item.domain}/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{item.domain}</span>
                </a>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
