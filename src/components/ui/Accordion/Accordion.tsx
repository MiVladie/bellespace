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
		let height = currentState.height;

		// Toggle
		if (nextProps.expanded !== currentState.prevExpanded) {
			if (currentState.height === 0 || currentState.height === 'auto') {
				height = currentState.myRef!.scrollHeight;
			} else {
				height = 0;
			}
		}

		return {
			...currentState,
			height: height,
			prevExpanded: nextProps.expanded
		};
	}

	componentDidUpdate = (_: Props, prevState: State) => {
		// Closing
		if (prevState.height === 'auto' && typeof this.state.height === 'number') {
			setTimeout(() => this.setState({ height: 0, overflow: 'hidden' }), 1);
		}
	};

	updateAfterTransition = () => {
		// Finished opening
		if (this.props.expanded) {
			this.setState({ height: 'auto', overflow: 'visible' });
		}

		this.props.onTransitionEnd?.();
	};

	setInnerRef = (ref: HTMLElement) => {
		this.setState({ myRef: ref });
	};

	render() {
		const { height, overflow } = this.state;
		const { className, expanded, children } = this.props;

		return (
			<section
				className={classes.Accordion}
				style={{ height, overflow }}
				ref={this.setInnerRef}
				onTransitionEnd={() => this.updateAfterTransition()}>
				<div className={className} style={{ pointerEvents: expanded ? 'all' : 'none' }}>
					{children}
				</div>
			</section>
		);
	}
}

export default Accordion;
