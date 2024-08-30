import { ListFilesInDirectory } from './utils/listFilesInDirectory';
import { MoveErrorToAwait } from './utils/moveErrorToAwait';

const main = () => {
  MoveErrorToAwait();
  ListFilesInDirectory();
};

main();
