import { RefProps } from '@app-ui/ButtonUp/types/types';
import { IconArrowTwo } from '@app-ui/IconArrowTwo';

import { scrollToAnchor } from '@utils/functions/common/scrollToAnchor';

const ButtonUp = ({ childRef }: RefProps) => (
  <a
    className="up-btn"
    data-testId="button-up"
    onClick={() => scrollToAnchor(childRef)}
  >
    <IconArrowTwo />
  </a>
);

export default ButtonUp;
