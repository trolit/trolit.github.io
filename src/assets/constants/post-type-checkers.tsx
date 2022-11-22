import { defineTypeChecker } from '@/helpers/defineTypeChecker';
import { IHeader } from '@/interfaces/dashboard/posts/IHeader';

export const isHeader = (value: unknown) => defineTypeChecker<IHeader>(value);
