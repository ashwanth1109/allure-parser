import React from "react";
import categories from "../data/categories43";


export default () => {
  console.log(categories);
    const prodDefects = categories.children[0].children;

  const rootCauses = {
      'By(xpath, //div[contains(text(),"View Active Case")]|//h2[contains(text(),"View Active Case")])': [],
      'By(xpath, //div[contains(text(),"View Resolved Case")]|//h2[contains(text(),"View Resolved Case")])': [],
      'By(xpath, //div[contains(text(),"View Closed Case")]|//h2[contains(text(),"View Closed Case")])': [],
      'By(xpath, //df-modal//button[normalize-space(.)="OK"]': [],
      'by.cssContainingText("div", "Edit "")': [],
      'By(xpath, //div[contains(text(),"Edit")]|//h2[contains(text(),"Edit")])': [],
      "No element found using locator: By(xpath, //tr[td[contains(., 'Custom Wiki template')]]//i[@title='Edit'])": [],
      'No element found using locator: By(xpath, //div[normalize-space(text())="Inbox"]': [],
      'No element found using locator: By(xpath, //div[contains(@class,"df-modal__content")]//img[@alt="undefined.png"])': [],
      "javascript error: Cannot read property 'indexOf' of null": [],
      'By(css selector, div.df-loader)Element should not be visible': [],
      'By(xpath, //tr[td[contains(.,': [],
      'By(xpath, //app-dynamic-html[contains(normalize-space(.)': [],
  };

  const removeIds = [];

  const rootCausesClone = JSON.parse(JSON.stringify(rootCauses));

    for (const [id, item] of prodDefects.entries()) {
        for (const cause in rootCauses) {
            if (item.name.includes(cause)) {
                rootCauses[cause].push(...item.children);
                removeIds.push(id);
                rootCausesClone[cause].push(item.name);
            }
        }
    }

    removeIds.sort((a,b) => b - a);

    for (const id of removeIds) {
        prodDefects.splice(id,1);
    }

    console.log('rootCauses', rootCauses);

    console.log('prodDefects', prodDefects);

    return (
        <ul>
            {Object.keys(rootCauses).map((key,id) => {
                return (
                    <li key={id}>
                        <h3>{key} - {rootCauses[key].length} failed</h3>
                    <ul>
                        {rootCauses[key].map((test) => {
                            return (
                                <li key={test.uid}>{test.name} ({test.status})</li>
                            )
                        })}
                    </ul>
                    </li>
                )
            })}
        </ul>
    )
};
