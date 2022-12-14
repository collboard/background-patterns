import { BackgroundPatternArt, declareModule } from '@collboard/modules-sdk';
import { author, name as packageName, version } from '../package.json';
import { PATTERNS } from './config';

for (const { name, deprecatedName, title, src, size, opacity } of PATTERNS) {
    const deprecatedNames = [];

    deprecatedNames.push(`${deprecatedName}BackgroundPattern`);
    if (deprecatedName) {
        deprecatedNames.push(`@collboard/${deprecatedName.toLowerCase()}-background-pattern`);
    }

    declareModule({
        manifest: {
            name: `${packageName}/${name}`,
            version,
            deprecatedNames,
            title,
            categories: ['Basic', 'Wallpaper'],
            icon: src,
            author,
        },
        async setup(systems) {
            // TODO: Try just to destruct request>  async setup({request}) {

            const { virtualArtVersioningSystem } = await systems.request('virtualArtVersioningSystem');

            return virtualArtVersioningSystem
                .createPrimaryOperation()
                .newArts(new BackgroundPatternArt(src, size, opacity))
                .persist(/* Note: This is a virtual operation but we want still to keep same API. */);
        },
    });
}

/**
 * TODO: !!! Make 0.5x, 2x, 3x, 4x,... variants
 * TODO: Maybe a maker for this - makeBackgroundPatternModule (same in all @collboard/background-* repositories)
 */
