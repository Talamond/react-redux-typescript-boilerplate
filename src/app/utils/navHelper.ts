export function navigate(event: React.MouseEvent<HTMLElement>, url: string, history) {
  if (event.ctrlKey || event.metaKey) {
    window.open(url, '_blank');
  } else {
    history.push(url)
  }
}
