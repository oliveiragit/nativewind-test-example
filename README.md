## Example Code

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

   ```bash
    yarn start
   ```

I

```typescript
import * as React from "react";
import { Text, View } from "react-native";
import { render } from "@testing-library/react-native";

const BlackViewWhiteText = () => {
  return (
    <View
      testID="black-view"
      className="bg-black flex-1 justify-center items-center"
    >
      <Text className="text-white">white text</Text>
    </View>
  );
};

it("should correct styles for black background and white text using NativeWind", () => {
  const { getByText, toJSON, getByTestId } = render(<BlackViewWhiteText />);

  const text = getByText("white text");
  const view = getByTestId("black-view");

  expect(toJSON()).toMatchSnapshot();

  expect(text).toHaveProp("className");
  expect(view).toHaveStyle({ color: "black" }); // same rgb(0,0,0)
  expect(text).toHaveStyle({ color: "white" }); // same rgb(255,255,255)

  /* expect(element).toHaveStyle()
    - Expected
    + Received
    - color: black;
    */
});
```
