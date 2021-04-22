import React, { Component } from 'react';

import classes from './Accordion.module.scss';

interface Props {
	className?: string;
	expanded: boolean;
	children: React.ReactNode;
}

interface State {
	height: number | 'auto';
	myRef: HTMLElement | null;
	prevExpanded: boolean;
}

class Accordion extends Component<Props, State> {
	state = {
		height: this.props.expanded ? 'auto' : 0,
		myRef: null,
		prevExpanded: this.props.expanded
	} as State;

	static getDerivedStateFromProps(nextProps: Props, currentState: State) {
		return {
			...currentState,
			height:
				nextProps.expanded !== currentState.prevExpanded
					? currentState.myRef?.scrollHeight
					: currentState.height,
			prevExpanded: nextProps.expanded
		};
	}

	componentDidUpdate = (_: Props, prevState: State) => {
		if (prevState.height === 'auto' && typeof this.state.height === 'number') {
			setTimeout(() => this.setState({ height: 0 }), 1);
		}
	};

	setInnerRef = (ref: HTMLElement) => {
		this.setState({ myRef: ref });
	};

	updateAfterTransition = () => {
		if (this.props.expanded) {
			this.setState({ height: 'auto' });
		}
	};

	render() {
		const { height } = this.state;
		const { className, children } = this.props;

		return (
			<section
				className={classes.Accordion}
				style={{ height: height }}
				ref={this.setInnerRef}
				onTransitionEnd={() => this.updateAfterTransition()}>
				<div className={className}>{children}</div>
			</section>
		);
	}
}

export default Accordion;
