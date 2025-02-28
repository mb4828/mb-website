import { faCertificate, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function CertifiedIcon() {
  return (
    <span className="fa-layers fa-fw" style={{ marginRight: 8 }}>
      <FontAwesomeIcon icon={faCertificate} size="lg" />
      <FontAwesomeIcon icon={faCheck} inverse transform="shrink-4" />
    </span>
  );
}
