export default async function loadBalancer(chinaDownload, USDownload) {
  return Promise.any(
    [chinaDownload, USDownload],
  ).then((resp) => resp);
}
