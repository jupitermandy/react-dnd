import { DragDropManagerImpl } from './DragDropManagerImpl'
import { DragDropManager, BackendFactory } from './interfaces'

export function createDragDropManager(
	backendFactory: BackendFactory,
	globalContext: unknown,
	backendOptions: unknown,
	debugMode?: boolean,
): DragDropManager {
	const manager = new DragDropManagerImpl(debugMode)
	const backend = backendFactory(manager, globalContext, backendOptions)
	manager.receiveBackend(backend)
	return manager
}
