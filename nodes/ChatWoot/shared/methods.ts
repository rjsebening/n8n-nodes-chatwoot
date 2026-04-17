import { applicationLoadOptions } from '../methodes/Application/application.loadOptions';
import { clientLoadOptions } from '../methodes/Client/client.loadOptions';
import { platformLoadOptions } from '../methodes/Platform/platform.loadOptions';

export { getCustomAttributeFields } from '../methodes/Application/actions/custom-attributes/custom-attributes.resourceMapping';

export const loadOptions = {
	...applicationLoadOptions,
	...platformLoadOptions,
	...clientLoadOptions,
};
