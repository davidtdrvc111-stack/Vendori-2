import Image, { ImageProps } from 'next/image';
import { validateImageAlt } from '@/lib/seo-utils';

/**
 * SEO-optimierte Image-Komponente
 *
 * Wrapper um next/image mit automatischer alt-Text Validierung
 * im Development-Modus.
 *
 * @example
 * ```tsx
 * <SEOImage
 *   src="/team-photo.webp"
 *   alt="VENDORi Team bei der Arbeit"
 *   width={800}
 *   height={600}
 * />
 * ```
 */
export function SEOImage(props: ImageProps) {
  const { alt, src } = props;

  // Validierung nur im Development-Modus
  if (process.env.NODE_ENV === 'development') {
    validateImageAlt(
      typeof alt === 'string' ? alt : '',
      typeof src === 'string' ? src : 'unknown'
    );
  }

  return <Image {...props} />;
}
