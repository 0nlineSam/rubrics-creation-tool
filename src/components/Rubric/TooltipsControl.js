import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import _ from "lodash";
import { useLocalStorage } from "usehooks-ts";

const TooltipsControl = () => {
  const [showTooltips, setShowTooltips] = useLocalStorage(
    "rubric_showTooltips",
    false
  );

  console.log("Rendering with tooltips = " + showTooltips);

  const handleClick = () => {
    setShowTooltips((checked) => !checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch sx={{ ml: 1 }} checked={showTooltips} onClick={handleClick} />
        }
        label="Toggle tooltips"
      />
    </FormGroup>
  );
};

export default TooltipsControl;