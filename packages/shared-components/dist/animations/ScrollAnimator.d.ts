import { FC, PropsWithChildren } from 'react';

declare const Animate: {
    FadeIn: FC<PropsWithChildren<{
        className?: string | undefined;
    }>>;
    FadeUp: FC<PropsWithChildren<{
        className?: string | undefined;
    }>>;
    ScaleIn: FC<PropsWithChildren<{
        className?: string | undefined;
    }>>;
};

export { Animate };
