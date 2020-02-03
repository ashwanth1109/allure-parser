import React, { useState, useCallback, useRef, useEffect } from 'react';
import * as R from 'ramda';
import ReactJSON from 'react-json-view';

const pages = {
  HOME: 'HOME',
  REPORT: 'REPORT',
  CAUSES: 'CAUSES'
};

export default () => {
  const fileRef = useRef(null);
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [page, setPage] = useState(pages.HOME);
  const [failingTests, setFailingTests] = useState({});
  const [rootCauses, setRootCauses] = useState({});
  const [totalCases, setTotalCases] = useState(0);

  const showReport = useCallback(() => {
    let total = 0;
    const tests = {};
    // TODO: Figure out how to parse the file to generate report
    const prodDefects = file.children[0].children;
    prodDefects.map(test => {
      let testName;
      if (test.name.includes('Wait timed out after ')) {
        testName = test.name.split('Wait timed out after ')[0];
      } else {
        testName = test.name;
      }
      tests[testName] = test.children.reduce((acc, val) => {
        return [...acc, val.name];
      }, tests[testName] || []);
    });
    const testArr = [];
    R.mapObjIndexed((val, key) => {
      testArr.push([key, val]);
    }, tests);
    const sortedArr = R.sort((a, b) => b[1].length - a[1].length, testArr);
    const sortedTests = {};
    R.map(val => {
      sortedTests[val[0]] = val[1];
      total += val[1].length;
    }, sortedArr);
    setTotalCases(total);
    setFailingTests(sortedTests);
    setPage(pages.REPORT);
  }, [file]);

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

  const getFile = useCallback(e => {
    e.preventDefault();
    const file = fileRef.current.files[0];
    const reader = new FileReader();
    reader.onload = e => {
      setFile(JSON.parse(e.target.result));
    };
    reader.readAsText(file);
  }, []);

  useEffect(() => {
    if (file) showReport();
  }, [file]);

  if (page === pages.HOME)
    return (
      <div className="col container">
        <div className="app-header">
          <form onSubmit={getFile}>
            <h2>Upload your Categories.json here</h2>
            <input type="file" name="myFile" ref={fileRef} />
            <button type="submit">Upload & Generate Report</button>
          </form>
        </div>
      </div>
    );

  if (page === pages.REPORT)
    return (
      <div className="monokai-bg">
        <div className="col container">
          <div className="app-header">
            <h3 className="white-text">Total Number of Cases: {totalCases}</h3>
            {/*<input type="text" placeholder="Create a root cause" ref={inputRef} />*/}
            {/*<button onClick={addRootCause}>Add</button>*/}
          </div>
          <div className="jsonDisplay">
            <ReactJSON src={failingTests} theme="monokai" collapsed={1} />
          </div>
        </div>
      </div>
    );

  return <div>Page Not Found</div>;
};
