import LinkForm from '../../entities/link/ui/LinkForm';
import { useLinkStore } from '../../entities/link/model/link.store';
import type { ISourceLink } from '../../entities/link/types/link.types';
import styles from './LinkPage.module.css';
import { API_URL } from '../../constants/constants';

const LinkPage = () => {
  const { postLink, linkData } = useLinkStore();

  const handleSendLink = async (data: ISourceLink): Promise<void> => {
    await postLink(data);
  };

  const renderContent = () => {
    if (linkData) {
      return (
        <>
          <p className={styles.linkTitle}>your link now looks like this:</p>
          <a
            className={styles.link}
            target="_blank"
            href={linkData.originalUrl}
          >{`${API_URL}/${linkData.shortUrl}`}</a>
        </>
      );
    }

    return (
      <>
        <p className={styles.linkTitle}>Enter the link you want to shorten</p>
      </>
    );
  };

  return (
    <div>
      <div className={styles.linkContent}>
        <LinkForm handleSendLink={handleSendLink} />
        <div className={styles.linkBlock}>{renderContent()}</div>
      </div>
    </div>
  );
};

export default LinkPage;
