import { IStringMessage, string_url } from '@collboard/modules-sdk';
import { IVectorData } from 'xyzt';

/**
 * Configuration of the grid pattern
 */
export interface IPatternConfig {
    name: string;
    deprecatedName?: string;
    title: IStringMessage;
    src: string_url;
    size: IVectorData;
    opacity: number;
}
