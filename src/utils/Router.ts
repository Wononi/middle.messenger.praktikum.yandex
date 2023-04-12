function isEqual(lhs, rhs) {
    return lhs === rhs;
}

function render(block, query) {
    const root = document.querySelector(query);
    root.append(block.getContent());
    return root;
}

class Route {
    private pathname: string;
    private blockClass: any;
    private block: any;
    private props: any;
    constructor(pathname, view, props) {
        this.pathname = pathname;
        this.blockClass = view;
        this.block = null;
        this.props = props;
    }

    navigate(pathname) {
        if (this.match(pathname)) {
            this.pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this.block) {
            this.block.hide();
        }
    }

    match(pathname) {
        return isEqual(pathname, this.pathname);
    }

    render() {
        if (!this.block) {
            this.block = new this.blockClass(this.props);
            render(this.block, this.props.rootQuery);
            return;
        }

        this.block.show();
    }
}

export class Router {
    private static instance: any;
    private routes: any[];
    private history: History;
    private currentRoute: any;
    private rootQuery: any;
    constructor(rootQuery) {
        if (Router.instance) {
            return Router.instance;
        }

        this.routes = [];
        this.history = window.history;
        this.currentRoute = null;
        this.rootQuery = rootQuery;

        Router.instance = this;
    }

    use(pathname, block) {
        const route = new Route(pathname, block, {rootQuery: this.rootQuery});

        this.routes.push(route);

        return this;
    }

    start() {
        window.onpopstate = (event => {
            this._onRoute(event.currentTarget.location.pathname);
        }).bind(this);

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }

        if (this.currentRoute && this.currentRoute !== route) {
            this.currentRoute.leave();
        }

        this.currentRoute = route;
        route.render(route, pathname);
    }

    go(pathname) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname) {
        return this.routes.find(route => route.match(pathname));
    }
}
