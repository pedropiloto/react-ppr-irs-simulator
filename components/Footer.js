import React from 'react';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <span className="copyrightsSpan">
        Copyright ⓒ
        {year}
        {' '}
        Pedro Piloto
      </span>
      <span className="socialButton">
        <Link href="https://www.linkedin.com/in/pedro-piloto/" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
      </span>
      <span className="socialButton">
        <Link href="https://github.com/pedropiloto" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </span>
      <span className="socialButton">
        <Link href="https://pedropiloto.com" target="_blank">
          <FontAwesomeIcon icon={faLink} />
        </Link>
      </span>
    </footer>
  );
}

export default Footer;
