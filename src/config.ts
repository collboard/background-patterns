import { Vector } from 'xyzt';
import chessboardSrc from '../assets/patterns/chessboard.png';
import dotsSrc from '../assets/patterns/dots.svg';
import gridSrc from '../assets/patterns/grid.png';
import linesGuidesSrc from '../assets/patterns/lines-guides.png';
import linesHorizontalSrc from '../assets/patterns/lines-horizontal.png';
import { IPatternConfig } from './interfaces/IPatternConfig';

/**
 * TODO: !!! Use SCALE_PIXELS.grid
 */
export const GRID_SIZE = 30;
export const OPACITY = 0.07;

export const PATTERNS: IPatternConfig[] = [
    {
        name: 'dots',
        deprecatedName: 'Dots',
        title: { en: 'Dotted background', cs: 'Tečkovaný podklad' },
        src: dotsSrc,
        size: Vector.square(GRID_SIZE),
        opacity: OPACITY,
    },
    {
        name: 'grid',
        deprecatedName: 'Grid',
        title: { en: 'Grid background', cs: 'Čtverečkovaný podklad' },
        src: gridSrc,
        size: Vector.square(GRID_SIZE),
        opacity: OPACITY,
    },
    {
        name: 'lines-horizontal',
        deprecatedName: 'LinesHorizontal',
        title: { en: 'Lines background', cs: 'Linkovaný podklad' },
        src: linesHorizontalSrc,
        size: Vector.square(GRID_SIZE),
        opacity: OPACITY,
    },
    {
        name: 'lines-with-guides',
        deprecatedName: 'LinesWithGuides',
        title: { en: 'Lines with guides background', cs: 'Linkovaný podklad s pomocnými čárami' },
        src: linesGuidesSrc,
        size: Vector.square(GRID_SIZE * 3),
        opacity: 1,
    },
    {
        name: 'chessboard',
        deprecatedName: 'chessboard',
        title: { en: 'Chessboard background', cs: 'Podklad s šachovnící' },
        src: chessboardSrc,
        size: Vector.square(GRID_SIZE),
        opacity: 1,
    },
];

/**
 * TODO: Dots (@collboard/background-patterns/dots) is now only external repository, it should be also internal to faster loading
 * TODO: [🏨] All images should be SVG
 * TODO: Isometric grid background
 * TODO: Also make fractal-like patterns and maybe use dot one as new default
 */
