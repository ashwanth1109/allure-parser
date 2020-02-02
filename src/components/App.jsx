import React, { useState, useCallback, useRef } from 'react';
import * as R from 'ramda';
import ReactJSON from 'react-json-view';
import categories from '../data/categories43';

const pages = {
  HOME: 'HOME',
  REPORT: 'REPORT',
  CAUSES: 'CAUSES'
};

export default () => {
  const inputRef = useRef(null);
  const textAreaRef = useRef(null);
  const [page, setPage] = useState(pages.HOME);
  const [failingTests, setFailingTests] = useState({});
  const [rootCauses, setRootCauses] = useState({});

  const showReport = useCallback(() => {
    const tests = {};
    // TODO: Figure out how to parse the file to generate report
    const prodDefects = categories.children[0].children;
    console.log(prodDefects);
    prodDefects.map(test => {
      tests[test.name] = test.children.reduce((acc, val) => {
        return [...acc, val.name];
      }, []);
    });
    setFailingTests(tests);
    setPage(pages.REPORT);
  }, []);

  const showCauses = useCallback(() => {
    // TODO: Sort this object
    // R.map(rootCauses)
    setPage(pages.CAUSES);
  }, [rootCauses]);

  const addRootCause = useCallback(() => {
    const { value: cause } = inputRef.current;
    rootCauses[cause] = [];
    const newFailingTests = {};
    Object.keys(failingTests).map(key => {
      const tests = failingTests[key];
      if (key.includes(cause)) {
        rootCauses[cause] = rootCauses[cause] = [
          ...rootCauses[cause],
          ...tests
        ];
      } else {
        newFailingTests[key] = tests;
      }
    });
    setFailingTests(newFailingTests);
    inputRef.current.value = '';
  }, [failingTests]);

  if (page === pages.HOME)
    return (
      <div className="col container">
        <div className="app-header">
          <h2>Paste the categories.json file below</h2>
          <button onClick={showReport}>Generate Report</button>
        </div>
        <textarea
          placeholder="Enter your file contents here"
          data-gramm_editor="false"
          ref={textAreaRef}
        />
      </div>
    );

  if (page === pages.REPORT)
    return (
      <div className="col container">
        <div className="app-header">
          <input type="text" placeholder="Create a root cause" ref={inputRef} />
          <button onClick={addRootCause}>Add</button>
          <button onClick={showCauses}>View</button>
        </div>
        <div className="monokai-bg">
          <ReactJSON src={failingTests} theme="monokai" collapsed={1} />
        </div>
      </div>
    );

  if (page === pages.CAUSES)
    return (
      <div className="col container m-top-32">
        <div className="app-header">
          <button onClick={() => setPage(pages.REPORT)}>Go Back</button>
          <h2>Root Causes</h2>
        </div>
        <div className="monokai-bg">
          <ReactJSON src={rootCauses} theme="monokai" collapsed={1} />
        </div>
      </div>
    );

  return <div>Page Not Found</div>;
};
