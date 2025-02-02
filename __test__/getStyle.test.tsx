import { render } from '@testing-library/react-native';

import { BlackViewWhiteText } from '~/components/BlackViewWhiteText';

it('should set correct styles for black background and white text using NativeWind', () => {
  const { getByText, toJSON, getByTestId } = render(<BlackViewWhiteText />);

  const text = getByText('white text');

  const view = getByTestId('black-view');
  expect(toJSON()).toMatchSnapshot();

  expect(text).toHaveProp('className');
  expect(view).toHaveStyle({ color: 'black' }); // same rgb(0,0,0)
  expect(text).toHaveStyle({ color: 'white' }); // same rgb(255,255,255)

  /* ERROR expect(element).toHaveStyle()
    - Expected
    + Received
    - color: black;
    */
});
