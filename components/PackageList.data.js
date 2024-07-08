import packageData from '../data/packageData.json';

export default {
  load() {
    const packages = Object.keys(packageData)
      .filter((name) => name != null)
      .map((name) => ({
        name,
        ...packageData[name],
        documentation: `/docs/${packageData[name].slug}`,
        source: `https://github.com/sseworld/sseworld.github.io/edit/master/docs/${packageData[name].slug}`,
        icon: `/icons/${packageData[name].icon}.svg`,
      }))
      .sort((a, b) => a.order - b.order);

    return {
      packages,
      // Assuming thirdPartyPackages data is part of packageData or should be handled separately
    };
  },
};
