"use client";

import useSWR from "swr";
import axios from "axios";

const useGithubRepo = (name: string) => {
  const { data, error, isLoading } = useSWR(name, (url) => {
    return axios
      .get(url, {
        baseURL: "https://api.github.com/repos/rosestack",
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  });

  return {
    data,
    error,
    isLoading,
  };
};

const useNpmDownloads = (packageName: string) => {
  if ( packageName.startsWith("https://www.npmjs.com/package/") ) {
    packageName = packageName.replace("https://www.npmjs.com/package/", "");
  }
  
  const { data, error, isLoading } = useSWR<string>(packageName, (url) => {
    return axios.get(url, {
      baseURL: "https://api.npmjs.org/downloads/point/last-year",
    }).then((response) => {
      return response.data.downloads;
    }).catch((error) => {
      throw error;
    });
  });

  return {
    data,
    error,
    isLoading,
  };
};

const Ui = () => {
  const githubRepo = useGithubRepo("rosedb");
  const npmDownloads = useNpmDownloads("https://www.npmjs.com/package/rosedb");

  console.log(githubRepo);
  console.log(npmDownloads);
  
  return (
    <div>
      <p>done</p>
    </div>
  );
};

export default Ui;
