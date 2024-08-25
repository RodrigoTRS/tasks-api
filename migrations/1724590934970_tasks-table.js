/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */


exports.up = (pgm) => {
    pgm.createTable('tasks', {
        id: {
            type: 'uuid',
            primaryKey: true
        },
        title: {
            type: 'varchar(250)',
            notNull: true
        },
        description: {
            type: 'varchar(1000)'
        },
        start_date: {
            type: 'timestamp',
        },
        due_date: {
            type: 'timestamp',
        },
        created_at: {
            type: 'timestamp',
            notNull: true,
        },
        updated_at: {
            type: 'timestamp',
            notNull: true,
        },
        is_done: {
            type: 'timestamp',
        }
    });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {};
