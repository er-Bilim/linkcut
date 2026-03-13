import LinkForm from '../../entities/link/ui/LinkForm';
import { useLinkStore } from '../../entities/link/model/link.store';
import type { ISourceLink } from '../../entities/link/types/link.types';
import styles from './LinkPage.module.css';

const LinkPage = () => {
  const { postLink } = useLinkStore();

  const handleSendLink = async (data: ISourceLink): Promise<void> => {
    await postLink(data);
  };

  return (
    <div>
      <div className={styles.linkContent}>
        <LinkForm handleSendLink={handleSendLink} />
      </div>
    </div>
  );
};

export default LinkPage;
