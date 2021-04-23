import React, { Component } from 'react';

import classes from './Accordion.module.scss';

interface Props {
	className?: string;
	expanded: boolean;
	children: React.ReactNode;
	onTransitionEnd?: () => void;
}

interface State {
	height: number | 'auto';
	overflow: 'visible' | 'hidden';
	myRef: HTMLElement | null;
	prevExpanded: boolean;
}

class Accordion extends Component<Props, State> {
	state = {
		height: this.props.expanded ? 'auto' : 0,
		overflow: this.props.expanded ? 'visible' : 'hidden',
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
			setTimeout(() => this.setState({ height: 0, overflow: 'hidden' }), 1);
		}
	};

	setInnerRef = (ref: HTMLElement) => {
		this.setState({ myRef: ref });
	};

	updateAfterTransition = () => {
		if (this.props.expanded) {
			this.setState({ height: 'auto', overflow: 'visible' });
		}

		this.props.onTransitionEnd?.();
	};

	render() {
		const { height, overflow } = this.state;
		const { className, children } = this.props;

		return (
			<section
				className={classes.Accordion}
				style={{ height, overflow }}
				ref={this.setInnerRef}
				onTransitionEnd={() => this.updateAfterTransition()}>
				<div className={className}>{children}</div>
			</section>
		);
	}
}

export default Accordion;
