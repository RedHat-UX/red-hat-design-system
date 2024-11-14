import { isServer, LitElement } from 'lit';
const repoStatus = isServer ? await import('#11ty-data/repoStatus.js').then(x => x.default)
    : await fetch('/assets/javascript/repoStatus.json').then(x => x.json());
export class UxdotRepoElement extends LitElement {
    static getStatus(status) {
        const libraries = Object.entries(status.libraries);
        const overall = UxdotRepoElement.legend[status.overallStatus];
        return {
            ...status,
            color: overall.color,
            variant: overall.variant,
            icon: overall.icon,
            slug: status.name.toLowerCase().replace(/\s+/, '-'),
            libraries: libraries.flatMap(([key, status]) => {
                const legend = UxdotRepoElement.legend[status];
                return !legend ? [] : [{
                        key,
                        name: UxdotRepoElement.libraries[key],
                        color: legend.color,
                        variant: legend.variant,
                        icon: legend.icon,
                        status: legend.pretty,
                        description: UxdotRepoElement.checklist[key]?.[status] ?? '',
                    }];
            }),
        };
    }
    getStatus(tagName) {
        if (tagName) {
            return UxdotRepoElement.allStatus.find(x => x.tagName === tagName);
        }
        else {
            return UxdotRepoElement.allStatus;
        }
    }
}
UxdotRepoElement.libraries = {
    figma: 'Figma library',
    rhds: 'RH Elements',
    shared: 'RH Shared Libs',
    docs: 'Documentation',
};
UxdotRepoElement.legend = {
    planned: {
        pretty: 'Planned',
        description: 'Ready to be worked on or ready to be released',
        color: 'purple',
        variant: 'filled',
        icon: 'notification-fill',
    },
    inProgress: {
        pretty: 'In Progress',
        description: 'In the design or development process',
        color: 'green',
        variant: 'outline',
        icon: 'harvey-ball-50',
    },
    ready: {
        pretty: 'Ready',
        description: 'Ready to use and approved by all team members',
        color: 'green',
        variant: 'filled',
        icon: 'check-circle-fill',
    },
    deprecated: {
        pretty: 'deprecated',
        description: 'No longer supported by RHDS',
        color: 'orange',
        variant: 'filled',
        icon: 'close-circle-fill',
    },
    na: {
        pretty: 'N/A',
        description: 'Not planned, not available, or does not apply',
        color: 'gray',
        variant: 'outline',
        icon: 'ban',
    },
    beta: {
        pretty: 'Beta',
        color: 'purple',
        variant: 'outline',
        icon: 'build-fill',
    },
    experimental: {
        pretty: 'Experimental',
        color: 'orange',
        variant: 'outline',
        icon: 'experimental',
    },
    new: {
        pretty: 'New',
        color: 'cyan',
        variant: 'outline',
        icon: 'new-fill',
    },
};
UxdotRepoElement.checklist = {
    figma: {
        ready: 'Component is available in the Figma library',
        inProgress: 'Component will be added to the Figma library when finished',
        planned: 'Component should be added to the Figma library at a later date',
        deprecated: 'Component was removed from the Figma library',
        na: 'Not planned, not available, or does not apply',
        beta: '',
        experimental: '',
        new: '',
    },
    rhds: {
        ready: 'Component is available in the RH Elements repo',
        inProgress: 'Component will be added to the RH Elements repo when finished',
        planned: 'Component should be added to the RH Elements repo at a later date',
        deprecated: 'Component is no longer available in the RH Elements repo',
        na: 'Not planned, not available, or does not apply',
        beta: '',
        experimental: '',
        new: '',
    },
    shared: {
        ready: 'Component is available in the RH Shared Libs repo',
        inProgress: 'Component will be added to the RH Shared Libs repo when finished',
        planned: 'Component should be added to the RH Shared Libs repo at a later date',
        deprecated: 'Component is no longer available in the RH Shared Libs repo',
        na: 'Not planned, not available, or does not apply',
        beta: '',
        experimental: '',
        new: '',
    },
    docs: {
        ready: '',
        inProgress: '',
        planned: '',
        deprecated: '',
        na: '',
        beta: '',
        experimental: '',
        new: '',
    },
};
UxdotRepoElement.allStatus = repoStatus.map(UxdotRepoElement.getStatus);
//# sourceMappingURL=uxdot-repo.js.map