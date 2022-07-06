import React, { useState } from "react";
import styled from "styled-components";
import { AutoComplete } from "@geist-ui/core";
import { OptionsObj } from "./Icons";

interface Props {
  onSelectedChange: (options: OptionsObj[]) => void;
  onSearchChange: (value: string) => void;
  allOptions: object[];
}

export const IconSearcher = ({
  allOptions,
  onSelectedChange,
  onSearchChange,
}: Props) => {
  const [options, setOptions] = React.useState(allOptions);
  const [search, setSearch] = useState("");

  const updateSearch = (value) => {
    setSearch(value);
    onSearchChange(value);
  };

  const updateOptions = (options) => {
    setOptions(options);
    onSelectedChange(options);
  };

  const searchHandler = (currentValue) => {
    if (!currentValue) return setOptions(allOptions);
    const relatedOptions = allOptions.filter((item) =>
      item.value.includes(currentValue)
    );
    updateSearch(currentValue);
    updateOptions(relatedOptions);
  };

  return (
    <AutoComplete
      width="100%"
      options={options}
      placeholder="Enter here"
      onSearch={searchHandler}
      clearable
    />
  );
};

IconSearcher.defaultProps = {
  onSelectedChange: () => null,
  onSearchChange: () => null,
  allOptions: [
    { label: "London", value: "london" },
    { label: "Sydney", value: "sydney" },
    { label: "Shanghai", value: "shanghai" },
  ],
};
