import { Badge } from './Badge'
import { Title } from './Title'
import { Avatar } from './Avatar'
import { PropertyCard } from './PropertyCard'
import { Props as PropertyCardProps } from './PropertyCard'

interface PropertyProps {
  (props: PropertyCardProps): JSX.Element;
	Badge: typeof Badge;
	Title: typeof Title;
	Avatar: typeof Avatar;
}

export const Property: PropertyProps = Object.assign(PropertyCard, {
	Badge: Badge,
	Title: Title,
	Avatar: Avatar,

});
