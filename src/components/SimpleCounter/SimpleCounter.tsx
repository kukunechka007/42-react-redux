import React from "react";

import Button from "components/Button/Button";
import { ClickCount, Result, SimpleCounterWrapper} from "./styles";
import { SimpleCounterProps } from "./types";

function SimpleCounter({ count, onClick }: SimpleCounterProps) {
  return (
    <SimpleCounterWrapper>
      <Result>{count}</Result>
      <Button name='ADD' onClick={onClick} />
      <ClickCount>{clickCount}</ClickCount>
    </SimpleCounterWrapper>
  )
}

export default SimpleCounter;
