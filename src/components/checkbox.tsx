import React, { Dispatch, memo, SetStateAction } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import "./styles.css";

const CheckboxModal = ({
  setActiveCheck,
  activeCheck,
}: {
  setActiveCheck: Dispatch<SetStateAction<boolean>>;
  activeCheck: boolean;
}) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <Checkbox.Root
      checked={activeCheck}
      onCheckedChange={() => setActiveCheck(!activeCheck)}
      className="CheckboxRoot"
      defaultChecked
      id="c1"
    >
      <Checkbox.Indicator className="CheckboxIndicator">
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label className="Label" htmlFor="c1">
      Даю согласие на обработку персональных данных
    </label>
  </div>
);

export default memo(CheckboxModal);
