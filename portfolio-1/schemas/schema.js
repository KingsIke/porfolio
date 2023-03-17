import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import experience from './experience.js';
import skill from './skill.js';
import pageInfo from './pageInfo.js';
import social from './social.js';
import project from './project.js';

export default createSchema({
    name: "default",
    types: schemaTypes.concat([
        pageInfo, experience, skill, social, project
    ])
})