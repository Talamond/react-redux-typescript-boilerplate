import { useHistory } from 'react-router';

export function navigate(event: React.MouseEvent<HTMLElement>, url: string) {
  if (event.ctrlKey || event.metaKey) {
    window.open(url, '_blank');
  } else {
    useHistory().push(url)
  }
}
